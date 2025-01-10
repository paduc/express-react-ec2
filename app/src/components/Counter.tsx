import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { client } from "../lib/client";
import { queryClient } from "@/lib/queryClient";

export default function Counter() {
  const { data: counterData } = useQuery({
    queryKey: ['counter'],
    queryFn: () => client.getCounter.query(),
  });

  const { mutate } = useMutation({
    mutationFn: () => client.incrementCounter.mutate(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['counter'] });
    },
  });

  return (
    <Button onClick={() => mutate()}>
      counter is {counterData?.count ?? 0}
    </Button>
  );
} 