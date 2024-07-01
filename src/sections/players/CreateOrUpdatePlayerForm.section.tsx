"use client";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Input } from "@/src/components/forms/Input.component";
import { Radio } from "@/src/components/forms/Radio.component";
import { revalidatePath, revalidateTag } from "next/cache";

type FORM = {
  name: string;
  status: string;
  github: string;
  twitter: string;
  team_id?: number;
};

export const CreateOrUpdatePlayerForm: React.FC<{}> = ({}) => {
  const methods = useForm<FORM>({
    mode: "all",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const router = useRouter();

  const onSubmit = async (data: FORM) => {
    try {
      // console.log("player: create: ", data);
      const res = await fetch("/api/players/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Player created successfully!");
        router.push("/admin/players");
      } else {
        toast.error("Failed to create player");
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  return (
    <>
      <div className="my-4 mx-auto max-w-[500px] p-8 shadow">
        <h2 className="text-3xl font-bold text-center mb-6">
          {"Create Player"}
        </h2>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="name"
              label="Player Name"
              placeholder="Enter player name"
              register={register("name", { required: "Name is required" })}
            />

            <Input
              name="github"
              label="GitHub  URL"
              placeholder="Enter GitHub link"
              register={register("github")}
            />

            <Input
              name="twitter"
              label="Twitter URL"
              placeholder="Enter Twitter link"
              register={register("twitter")}
            />

            <div className="mb-4">
              <label className="block text-base font-medium text-dark mb-1">
                Status
              </label>
              <Radio
                name={"status"}
                value={"ACTIVE"}
                register={register("status", {
                  required: "Status is required",
                })}
                // defaultChecked
                classNameWrapper="mb-2"
                className="radio-primary"
                label="Active"
              />
              <Radio
                name={"status"}
                value={"INACTIVE"}
                register={register("status", {
                  required: "Status is required",
                })}
                classNameWrapper="mb-2"
                className="radio-accent"
                label="In Active"
              />
              <Radio
                name={"status"}
                value={"RETIRED"}
                register={register("status", {
                  required: "Status is required",
                })}
                classNameWrapper="mb-2"
                label="Retired"
              />

              {errors.status?.message && (
                <small className="mt-1 text-xs text-accent">
                  {errors.status.message}
                </small>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-full text-white">
              Submit
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  );
};
