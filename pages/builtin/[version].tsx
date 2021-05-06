// Copyright 2020 the Deno authors. All rights reserved. MIT license.

import { useRouter } from "next/router";
import { Documentation } from "../../components/Documentation";

const Page = () => {
  const { query } = useRouter();
  const version = query.version ?? "stable";
  return (
    <Documentation
      entrypoint={
        version === "unstable"
          ? "https://cdn.jsdelivr.net/gh/denoland/deno/cli/dts/lib.deno.unstable.d.ts"
          : `https://doc-proxy.deno.dev/builtin/${version}`
      }
      name={`builtin@${version}`}
    />
  );
};

export default Page;
