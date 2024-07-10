"use client";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Input } from "@/src/components/forms/Input.component";
import { Radio } from "@/src/components/forms/Radio.component";
import { Player } from "@prisma/client";

type FORM = {
  name: string;
  status: string;
  github: string;
  twitter: string;
  team_id?: number;
  player_id?: number;
};

export const CreateOrUpdatePlayerForm: React.FC<{
  player?: Player;
  onSuccess?: () => void;
}> = ({ player, onSuccess }) => {
  const methods = useForm<FORM>({
    mode: "all",
    defaultValues: {
      name: player?.name ?? "",
      github: player?.github ?? "",
      twitter: player?.twitter ?? "",
      status: player?.status ?? "",
      team_id: player?.team_id ?? undefined,
      player_id: player?.player_id ?? undefined,
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const router = useRouter();

  const endpoint = !player ? "/api/players/create" : "/api/players/update";
  const method = !player ? "POST" : "PUT";
  const messageSuccess = !player
    ? "Player created successfully!"
    : "Player updated successfully!";
  const messageError = !player
    ? "Failed to create player!"
    : "Failed to update player!";

  const onSubmit = async (data: FORM) => {
    try {
      // console.log("player: create: ", data);

      // if player, update. else create
      const res = await fetch(endpoint, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success(messageSuccess);
        router.refresh();
        onSuccess && onSuccess();
      } else {
        toast.error(messageError);
      }
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">
        {!player ? "Create A Player" : "Update " + player?.name}
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
    </>
  );
};
