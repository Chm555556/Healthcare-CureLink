import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({
  params: { userId },
}: {
  params: { userId: string };
}) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  // Redirect if patient already exists
  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="container remove-scrollbar">
        <div className="sub-container flex-1 max-w-[860px] flex-col py-10">
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

          <RegisterForm user={user} />

          <p className="py-12 copyright">© 2024 CureLink</p>
        </div>
      </section>

      <Image
        src="/assets/images/reg.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="max-w-[390px] side-img"
      />
    </div>
  );
};

export default Register;
