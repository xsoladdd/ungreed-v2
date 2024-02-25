import { useToast } from "@/components/ui/use-toast";
import {
  Transaction,
  useGenerateLedgerMutation,
  useGetDefaultLedgerTransactionsLazyQuery,
} from "@/graphql/client.generated";
import { useZustand } from "@/store";

// Define the useToggle hook
const useGenerateLedger = (): [() => void] => {
  const [generateLedger] = useGenerateLedgerMutation({});

  const [getDefaultLedgerTransactions] =
    useGetDefaultLedgerTransactionsLazyQuery();

  const {
    ledger: { setLedgerStatus, setSelectedLedger, selectedLedger },
    filter: { cutoff, month, year },
    user,
  } = useZustand();
  const { toast } = useToast();

  const handleGenerate = () => {
    setLedgerStatus("loading");
    getDefaultLedgerTransactions({
      variables: {
        where: {
          cutoff: { _eq: selectedLedger?.cutoff },
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
              user_id: user.id ?? "",
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
