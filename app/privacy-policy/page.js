import Markdown from "react-markdown";
import { privacyPolicy } from "@/constants";

function PrivacyPolicy() {
  return (
    <main>
      <section className="max-w-screen-lg mx-auto px-4 my-24">
        <article className="prose prose-sm md:prose-lg">
          <Markdown>{privacyPolicy.content}</Markdown>
        </article>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
