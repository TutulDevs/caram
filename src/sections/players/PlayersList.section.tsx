import { getPlayersAll } from "@/src/lib/helpers/api_call";
import { Player } from "@prisma/client";
import { FiUser } from "react-icons/fi";

export const PlayersList = async () => {
  try {
    const list: Player[] = await getPlayersAll();
    console.log("list: ", list);

    return list.length == 0 ? (
      <div className="text-accent text-center">No Players Found!</div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map((player, idx) => (
          <div className="card bg-base-100 shadow-xl">
            <div className="flex items-center gap-4">
              <FiUser />
              <div>
                <h3 className="text-lg font-medium">{player.name}</h3>
                <p className="text-sm text-muted-foreground">{player.status}</p>
              </div>
            </div>

            {/* <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <GithubIcon className="w-5 h-5 text-muted-foreground" />
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  johndoe
                </a>
              </div>
              <div className="flex items-center gap-2">
                <TwitterIcon className="w-5 h-5 text-muted-foreground" />
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:underline"
                >
                  @johndoe
                </a>
              </div>
            </div>
          </CardContent> */}
          </div>
        ))}
      </div>
    );
  } catch (error: any) {
    return <div className="text-accent text-center">{error?.message}</div>;
  }
};
