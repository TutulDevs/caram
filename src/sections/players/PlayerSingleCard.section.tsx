import { Player } from "@prisma/client";
import { FiUser } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { GiHalt } from "react-icons/gi";
import { TbClockHour12, TbClockHour3 } from "react-icons/tb";
import Link from "next/link";
import { cn } from "@/src/lib/helpers/corefunctions";
import { dateTimeDisplayer } from "@/src/lib/helpers/corefunctions";
import {
  DeletePlayerActionBtn,
  UpdatePlayerActionBtn,
} from "./PlayerActionBtns.section";

export const PlayerSingleCard: React.FC<{ player: Player }> = ({ player }) => {
  return (
    <>
      <div
        key={player.player_id}
        className="card bg-base-100 shadow-xl hover:shadow-md duration-150 ease-in "
      >
        <div className="card-body flex flex-col">
          {/* user */}
          <div className="flex  gap-4">
            <FiUser size={20} className="mt-1" />
            <h3 className="card-title flex-1">{player.name}</h3>
          </div>

          {/* socials */}
          <div className="mt-4 text-sm flex flex-col gap-2">
            <div
              className={cn("flex items-center gap-4", {
                ["opacity-50"]: !player.github,
              })}
            >
              <FaGithubAlt />{" "}
              {!player.github ? (
                "Not Found"
              ) : (
                <Link
                  href={player.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {player.github}
                </Link>
              )}
            </div>

            <div
              className={cn("flex items-center gap-4", {
                ["opacity-50"]: !player.twitter,
              })}
            >
              <FaXTwitter />{" "}
              {!player.twitter ? (
                "Not Found"
              ) : (
                <Link
                  href={player.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {player.twitter}
                </Link>
              )}
            </div>
          </div>

          {/* creation */}
          <div className="mt-2 flex flex-col gap-1 text-sm">
            <div
              className="flex items-center gap-2 tooltip"
              data-tip={"Created At"}
            >
              <TbClockHour12 />{" "}
              <span>{dateTimeDisplayer(player.createdAt)}</span>
            </div>

            <div
              className="flex items-center gap-2 tooltip"
              data-tip={"Updated At"}
            >
              <TbClockHour3 />{" "}
              <span>{dateTimeDisplayer(player.updatedAt)}</span>
            </div>
          </div>

          {/* actions */}
          <div className="pt-4 mt-auto card-actions flex items-center justify-between">
            <span
              className={cn("text-lg text-muted-foreground tooltip", {
                ["text-primary tooltip-primary"]: player.status == "ACTIVE",
                ["text-accent tooltip-accent"]: player.status == "INACTIVE",
                ["text-base-300"]: player.status == "RETIRED",
              })}
              data-tip={player.status}
            >
              {/* {player.status} */}

              {player.status == "ACTIVE" ? (
                <FaThumbsUp />
              ) : player.status == "INACTIVE" ? (
                <GiHalt />
              ) : player.status == "RETIRED" ? (
                <FaThumbsDown />
              ) : (
                ""
              )}
            </span>

            <DeletePlayerActionBtn player={player} />

            <UpdatePlayerActionBtn
              player={player}
              className="btn btn-primary btn-circle btn-sm tooltip tooltip-primary flex items-center"
            />
          </div>
        </div>
      </div>
    </>
  );
};
