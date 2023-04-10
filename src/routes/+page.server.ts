import type { PageServerLoad } from './$types';

import { redirect } from '@sveltejs/kit';

export const load = (async ({ url }) => {
  // Kill Svelte node process if n=%1f or n=%0D
  // or anything matching /[^\t\x20-\x7e\x80-\xff]/
  const next = url.searchParams.get("n")
  if (next) {
    throw redirect(307, "/blah/?n=" + next);
  }
}) satisfies PageServerLoad;