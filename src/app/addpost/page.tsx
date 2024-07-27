import ActivePostForm from "@/components/ActivePostForm/ActivePostForm";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

const Page: React.FC = async () => {
  const session = await auth();
  const userId = "65b297e01424735511bbe770";

  if (!(session && session.user)) {
    redirect("/");
  } else if (!session) {
    redirect("/login");
  }

  return (
    <section className="admin-row">
      <Suspense fallback={<div className="loading-time"> Loading... </div>}>
        <ActivePostForm userId={userId} />
      </Suspense>
    </section>
  );
};

export default Page;
