import {
  ActionIcon,
  Avatar,
  Flex,
  Group,
  Header as MantineHeader,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useGetIdentity } from "@refinedev/core";
import {
  HamburgerMenu,
  RefineThemedLayoutV2HeaderProps,
} from "@refinedev/mantine";
import { IconMoonStars, IconSun } from "@tabler/icons";

type IUser = {
  id: number;
  name: string;
  avatar: string;
};

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = () => {
  const { data: user } = useGetIdentity<IUser>();

  const theme = useMantineTheme();

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const borderColor = dark ? theme.colors.dark[6] : theme.colors.gray[2];

  return (
    <MantineHeader
      zIndex={199}
      height={64}
      py={6}
      px="sm"
      sx={{
        borderBottom: `1px solid ${borderColor}`,
      }}
    >
      <Flex justify="space-between">
        <HamburgerMenu />
        <Group>
          <ActionIcon
            variant="outline"
            color={dark ? "yellow" : "primary"}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
          {(user?.name || user?.avatar) && (
            <Group spacing="xs">
              {user?.name && <Title order={6}>{user?.name}</Title>}
              <Avatar src={user?.avatar} alt={user?.name} radius="xl" />
            </Group>
          )}
        </Group>
      </Flex>
    </MantineHeader>
  );
};
