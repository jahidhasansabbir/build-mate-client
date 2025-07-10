import React from "react";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import AgreementRequestsCard from "./AgreementRequestsCard";
import Loading from "../../shared/Loading/Loading";

const AgreementRequests = () => {
  const axiosSecure = useAxiosSecure();
  const { data: mockRequests, isLoading, refetch } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const res = await axiosSecure.get("/agreements");
      return res.data;
    },
  });

  const filteredRequests = mockRequests?.filter(
    (request) => request.status === "pending"
  );

  if (isLoading) return <Loading></Loading>;

  return (
    <section className="px-4 md:px-10 py-10 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-10 text-center drop-shadow-md">
        Agreement Requests
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((req) => (
            <AgreementRequestsCard
              key={req._id}
              refetch={refetch}
              req={req}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400 py-12 italic">
            No agreement requests found.
          </p>
        )}
      </div>
    </section>
  );
};

export default AgreementRequests;
