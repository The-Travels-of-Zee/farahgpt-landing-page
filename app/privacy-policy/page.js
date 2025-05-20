"use client";

import Markdown from "react-markdown";
import { ConfigContext } from "@/utils/configContext";
import { useContext } from "react";

function PrivacyPolicy() {
  const {
    privacyPolicy: { content },
  } = useContext(ConfigContext);

  return (
    <main>
      <section className="max-w-screen-lg mx-auto py-4 px-4 mt-8 md:py-16">
        <Markdown className="prose text-xl">{content}</Markdown>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
