export default function NotFound() {
  return (
    <div>
      <h2>This will not work currently</h2>
      <p>
        To show this segment not-found page, go to <em>next.config.js</em> file.{" "}
      </p>
      <code>
        {`
          module.exports = {
            experimental: {
              appDir: true,
              appPathRouting: {
                fallback: true,
              },
            },
          };
        `}
      </code>
    </div>
  );
}
