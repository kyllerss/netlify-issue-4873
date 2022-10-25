import { redirect, type RequestEvent } from '@sveltejs/kit';
import type { Actions } from './$types';

/** @type {import('./restricted/upload').PageServerLoad} */
export async function load(event: RequestEvent) {

  return { message: "Hello world!" };
}

/** @type {import('./$types').Actions} */
export const actions: Actions = {
  default: async (event: RequestEvent) => {

    console.log("Received a POST!");

    throw redirect(302, "/?message_posted=true");
  }
};