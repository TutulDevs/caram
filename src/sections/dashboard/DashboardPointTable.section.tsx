import cn from "classnames";

export const DashboardPointTable: React.FC<{ className?: string }> = ({
  className,
}) => {
  const list = [
    {
      id: "1",
      team: {
        title: "TB",
        playerOne: "Taz",
        playerTwo: "Bacchu",
        played: 9,
        won: 7,
        lost: 2,
        tied: 0,
        point: 21,
        net_rate: 64,
      },
    },
    {
      id: "2",
      team: {
        title: "NS",
        playerOne: "Noman",
        playerTwo: "Sadid",
        played: 10,
        won: 6,
        lost: 3,
        tied: 1,
        point: 19,
        net_rate: 67,
      },
    },
    {
      id: "3",
      team: {
        title: "JS",
        playerOne: "Jasim",
        playerTwo: "Shafayet",
        played: 10,
        won: 6,
        lost: 4,
        tied: 0,
        point: 18,
        net_rate: 74,
      },
    },
  ];

  return (
    <div className={cn(className)}>
      <h2 className="text-center text-xl md:text-4xl mb-6">Point Table</h2>

      <div className="overflow-x-auto border border-primary/30 rounded-lg">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Team</th>
              <th>Match</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>Point</th>
              <th>Net Rate</th>
            </tr>
          </thead>
          <tbody>
            {list.map((el, idx) => {
              const team = el.team;

              return (
                <tr key={el.id} className="hover">
                  <th>{idx + 1}</th>
                  <td>{team.title}</td>
                  <td>{team.played}</td>
                  <td>{team.won}</td>
                  <td>{team.lost}</td>
                  <td>{team.tied}</td>
                  <td>{team.point}</td>
                  <td>{team.net_rate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
