import EntryView from "@/containers/Views/Entry";
import i18n from "@/utils/i18n";
import Head from "next/head";

export default function EntryPage() {
  return (
    <>
      <Head>
        <title>{i18n.texts.entry.title}</title>
      </Head>
      <EntryView />
    </>
  );
}
