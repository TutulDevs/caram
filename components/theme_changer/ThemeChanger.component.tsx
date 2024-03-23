"use client";

import { Select } from "@radix-ui/themes";
import { useTheme } from "next-themes";

const themes = [
  { value: "system", label: "System" },
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
];

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Select.Root
        defaultValue={theme ?? themes[0].value}
        onValueChange={(value) => setTheme(value)}
      >
        <Select.Trigger className="w-full" />
        <Select.Content>
          <Select.Group>
            <Select.Label>Theme</Select.Label>

            {themes.map((el) => (
              <Select.Item key={el.value} value={el.value}>
                {el.label}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </>
  );
};
