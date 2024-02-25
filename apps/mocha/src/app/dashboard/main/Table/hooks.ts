import { useToast } from "@/components/ui/use-toast";
import {
  Transaction,
  useGenerateLedgerMutation,
  useGetDefaultLedgerTransactionsLazyQuery,
} from "@/graphql/client.generated";
import { isFuture } from "@/lib/isFuture";
import { useZustand } from "@/store";

const useGenerateLedger = (): [() => void] => {
  const [generateLedger] = useGenerateLedgerMutation({});

  const [getDefaultLedgerTransactions] =
    useGetDefaultLedgerTransactionsLazyQuery({ fetchPolicy: "network-only" });

  const {
    ledger: { setLedgerStatus, setSelectedLedger },
    filter: { cutoff, month, year },
    user,
  } = useZustand();
  const { toast } = useToast();

  const handleGenerate = () => {
    // Evaluate if trying to generate for previous cutoffs
    const future = isFuture(month, year);
    if (!future) {
      console.error("Error with generating ledger for old data");
      toast({
        title: "Something went wrong",
        description: `Error with generating ledger for old data `,
        variant: "destructive",
      });
      return;
    }

    setLedgerStatus("loading");
    if (!user.id) {
      console.error("Problem with User ID", user.id);
      toast({
        title: "Something went wrong",
        description: `No user id found `,
        variant: "destructive",
      });
    }
    getDefaultLedgerTransactions({
      variables: {
        where: {
          cutoff: { _eq: cutoff },
          user_id: {
            _eq: user.id,
          },
          is_deleted: {
            _eq: false,
          },
        },
      },
      onCompleted: ({ default_ledger_transactions }) => {
        const transactions: Array<Partial<Transaction>> = [
          ...default_ledger_transactions.map((x) => {
            const { transaction_type, amount, description } = x;
            return { transaction_type, amount, description };
          }),
        ];
        generateLedger({
          variables: {
            input: {
              cutoff: cutoff,
              month: month,
              user_id: user.id,
              transactions: {
                data: [...transactions],
              },
              year: year,
            },
          },
          onCompleted: (data) => {
            setSelectedLedger({
              ...data.insert_ledger_one,
            });
          },
          onError: (err) => {
            console.error(err);
            toast({
              title: "Something went wrong",
              description: `Error generating ledger `,
              variant: "destructive",
            });
          },
        });
      },
    });
  };
  return [handleGenerate];
};

export default useGenerateLedger;
