import { Button } from "@/components/ui/button";
import React, { useMemo, useCallback } from "react";
import { decodeIds } from "./helper";
import { useParams, useRouter } from "next/navigation";
import { useGlobalStore } from "@/store/globalStore";
import { useGetLedgerIdsQuery } from "@/graphql/generated/graphql";

const LedgerNavigation: React.FC<{ loading: boolean }> = ({
  loading: loadingProps,
}) => {
  const { ids } = useParams();
  const router = useRouter();
  const { user } = useGlobalStore();

  // Memoize the current ledger ID to avoid re-decoding on every render
  const currentLedgerId = useMemo(() => {
    const idArray = decodeIds(ids as string);
    return idArray[0];
  }, [ids]);

  const { data, loading, error } = useGetLedgerIdsQuery({
    variables: { userId: user?.id },
    skip: !user?.id, // Skip query if no user ID
  });

  // Memoize ledger IDs and current index to avoid recalculation
  const navigationData = useMemo(() => {
    if (!data?.ledger || !currentLedgerId) {
      return {
        ledgerIds: [],
        currentIndex: -1,
        hasNext: false,
        hasPrevious: false,
      };
    }

    const ledgerIds = data.ledger.map((ledger) => ledger.id);
    const currentIndex = ledgerIds.findIndex((id) => id === currentLedgerId);

    return {
      ledgerIds,
      currentIndex,
      hasNext: currentIndex > 0,
      hasPrevious: currentIndex < ledgerIds.length - 1 && currentIndex !== -1,
    };
  }, [data?.ledger, currentLedgerId]);

  const handleNext = useCallback(() => {
    const { ledgerIds, currentIndex } = navigationData;

    if (currentIndex > 0) {
      const nextId = ledgerIds[currentIndex - 1];
      router.push(`/dashboard/ledger/${nextId}`);
    }
  }, [navigationData, router]);

  const handlePrevious = useCallback(() => {
    const { ledgerIds, currentIndex } = navigationData;

    if (currentIndex < ledgerIds.length - 1 && currentIndex !== -1) {
      const previousId = ledgerIds[currentIndex + 1];
      router.push(`/dashboard/ledger/${previousId}`);
    }
  }, [navigationData, router]);

  // Early return for loading or error states
  if (loading || !user?.id) {
    return (
      <div className="flex flex-row gap-2">
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
        <Button variant="outline" size="sm" disabled>
          Next
        </Button>
      </div>
    );
  }

  if (error || !user?.id) {
    return null; // Or show error state
  }

  return (
    <div className="flex flex-row gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={handlePrevious}
        disabled={!navigationData.hasPrevious || loadingProps}
      >
        Previous
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleNext}
        disabled={!navigationData.hasNext || loadingProps}
      >
        Next
      </Button>
    </div>
  );
};

export default LedgerNavigation;
