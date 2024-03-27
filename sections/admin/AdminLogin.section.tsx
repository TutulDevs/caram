import { Heading } from "@radix-ui/themes";

type FORM = {
  email: string;
  password: string;
};

export const AdminLogin = () => {
  return (
    <form className="border min-w-96">
      <Heading as="h1" size={"8"} color="jade" align={"center"} mb="6">
        Login
      </Heading>

      {/* email */}
      <div>
        <label htmlFor="email" className="text-lg "></label>
      </div>
    </form>
  );
};
