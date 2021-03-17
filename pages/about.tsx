import Head from "next/head";
import Link from "next/link";
import { CodeBlock, InlineCode } from "../components/JSDoc";
import Header from "../components/Header";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-white dark:bg-light-black-800">
      <Head>
        <title>关于 deno doc</title>
        <meta
          name="description"
          content="关于 deno doc，用于生成和查看 Deno 文档"
        />
      </Head>
      <Header />
      <div className="max-w-screen-md mx-auto pt-4 pb-12 sm:pb-16 md:pb-20 sm:py-6 px-4 sm:px-6 md:px-8 text-gray-900 dark:text-gray-200">
        <h2 className="text-3xl font-bold tracking-tight">关于</h2>
        <div className="text-base leading-6 pt-4 grid row-gap-3">
          <p>
            doc.deno.js.cn 是 TypeScript 和 ES 模块的文档托管服务，任何使用 ES
            模块导入语法的文件都可以使用 doc.deno.js.cn 生成文档。
          </p>
          <p className="mt-3">
            本站是官方 doc.deno.land 的镜像站，源码托管在{" "}
            <a
              href="https://github.com/justjavac/deno_doc_website"
              className="link"
            >
              GitHub
            </a>{" "}
            上。
          </p>
        </div>
        <div className="mt-12">
          <h3
            className="text-2xl font-semibold tracking-tight"
            id="adding-a-module-to-deno-doc"
          >
            向 deno doc 添加模块
          </h3>
          <p className="mt-2">
            doc.deno.js.cn 动态地从指定的 URL
            中提取模块，并在首次查看时为其生成文档。您不需要在 doc.deno.js.cn
            上手动注册模块。
          </p>
          <p className="mt-3">
            生成的文档将在 doc.deno.js.cn 缓存 24
            小时。在此时间之后，生成的文档从缓存中删除，并且模块被视为以前从未请求过。
          </p>
        </div>
        <div className="mt-12">
          <h3
            className="text-2xl font-semibold tracking-tight"
            id="removing-a-module-from-deno-doc"
          >
            从 deno doc 删除模块
          </h3>
          <p className="pt-2">
            由于模块在服务器会缓存 24 小时，因此在缓存过期之前，无法手动从
            doc.deno.js.cn 中删除模块。如果有紧急原因从缓存中删除一个模块，请在{" "}
            <a href="https://discord.gg/TGMHGv6" className="link">
              Deno discord
            </a>{" "}
            联系 Deno 维护者之一。
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold tracking-tight" id="badges">
            Badges
          </h3>
          <p className="mt-2">
            Below are examples of some snippets that you can use to link to
            doc.deno.js.cn from your project website or README.{" "}
            <b>
              Don't forget to replace the doc.deno.js.cn url with the one for
              your module.
            </b>
          </p>
          <img src="/badge.svg" alt="deno doc badge" className="mt-3" />
          <div className="mt-4">
            <span className="font-semibold text-lg">HTML</span>
            <CodeBlock
              language="html"
              value={`<a href="https://doc.deno.js.cn/https/deno.land/std/fs/mod.ts"><img src="https://doc.deno.js.cn/badge.svg" alt="deno doc"></a>`}
            />
          </div>
          <div className="mt-3">
            <span className="font-semibold text-lg">Markdown</span>
            <CodeBlock
              language="markdown"
              value={`[![deno doc](https://doc.deno.js.cn/badge.svg)](https://doc.deno.js.cn/https/deno.land/std/fs/mod.ts)`}
            />
          </div>
        </div>
        <div className="mt-12">
          <h3
            className="text-2xl font-semibold tracking-tight"
            id="limitations"
          >
            Limitations
          </h3>
          <div className="pt-2">
            <p>
              doc.deno.js.cn currently has some limitations that you should be
              aware of:
            </p>
            <ul className="list-disc mt-3 pl-8">
              <li>
                The time to pull source files and generate documentation from
                these may not exceed 58 seconds. If you are running into a
                timeout issue because of this, please open an issue on{" "}
                <a
                  href="https://github.com/justjavac/deno_doc_website"
                  className="link"
                >
                  GitHub
                </a>{" "}
                with a link to the module that is timing out.
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold tracking-tight" id="feedback">
            Feedback
          </h3>
          <p className="pt-2">
            On our{" "}
            <a
              href="https://github.com/justjavac/deno_doc_website"
              className="link"
            >
              GitHub
            </a>{" "}
            you can open an issue to share any ideas, feature requests,
            questions, or issues you are having. For general discussion about
            Deno or doc.deno.js.cn, please use our{" "}
            <a href="https://discord.gg/deno" className="link">
              Discord server
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
