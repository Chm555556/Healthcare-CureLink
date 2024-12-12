import Image from "next/image";
import Link from "next/link";

import { PatientForm } from "@/components/forms/PatientForm";
import { PasskeyModal } from "@/components/PasskeyModal";

const Home = ({ searchParams }: { searchParams: { admin?: string } }) => {
  const isAdmin = searchParams?.admin === "true";

  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal />}

      <section className="container my-auto remove-scrollbar">
        <div className="sub-container max-w-[496px]">
          <div className="flex items-center mb-12">
            <Image
              src="/assets/icons/logo-icon.svg"
              height={1000}
              width={1000}
              className="h-10 w-fit"
              alt="CureLink Logo"
            />
            <h1 className="ml-2 text-[25px] font-bold">CureLink</h1>
          </div>

          <PatientForm />

          <div className="flex justify-between mt-20 text-14-regular">
            <p className="text-dark-600 xl:text-left">© 2024 CureLink</p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/apoint.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="max-w-[50%] side-img"
      />
    </div>
  );
};

export default Home;
