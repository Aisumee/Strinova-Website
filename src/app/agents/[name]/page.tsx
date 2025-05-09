import agents from "@/data/agents.json";
import Agent from "@/components/Agent";
import { notFound } from "next/navigation";

type Props = {
  name: string;
};

interface PageProps {
  params: Promise<Props>;
}

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const paths = agents.map((agent) => ({
    name: agent.name.toLowerCase(),
  }));

  return paths;
};

// export async function generateMetadata(
//   { params }: MetadataProps<Props>,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   const { id } = await params;
//   const parentMetadata = await parent;

//   const character = getCharacterById(parseInt(id)) as RWCharacter;
//   const dollName = character.name;

//   return {
//     metadataBase: parentMetadata.metadataBase,
//     title: dollName,
//     openGraph: {
//       ...parentMetadata.openGraph,
//       images: {
//         url: character.card ?? "",
//         alt: dollName,
//       },
//       url: "./",
//     },
//   };
// }

const Page: React.FC<PageProps> = async ({ params }) => {
  const { name } = await params;
  const agent = agents.find((agent) => agent.name.toLowerCase() === name.toLowerCase());

  if (!agent) {
    return notFound();
  }

  return <Agent agent={agent} />;
};

export default Page;
