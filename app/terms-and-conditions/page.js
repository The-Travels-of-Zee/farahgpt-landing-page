import Markdown from "react-markdown";
import { termsAndConditions } from "@/constants";

function TermsAndConditions() {
  return (
    <main>
      <section className="max-w-screen-lg mx-auto px-4 my-24">
        <article className="prose prose-sm md:prose-lg">
          <Markdown>{termsAndConditions.content}</Markdown>
        </article>
      </section>
    </main>
  );
}

export default TermsAndConditions;
