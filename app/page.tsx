import { Box, Heading, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <main>
      <Box className="min-h-screen bg-gray-900x flex flex-col items-center justify-center">
        <Heading
          as="h1"
          size={"9"}
          mb={"4"}
          color="green"
          className="font-bold animate-pulse"
        >
          {"Coming Soon"}
        </Heading>

        <Text className="text-lg">
          {"I'm working hard to bring you something amazing. Stay tuned!"}
        </Text>
      </Box>
    </main>
  );
}
