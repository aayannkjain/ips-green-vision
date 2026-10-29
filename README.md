# IPS Green Vision

A sustainability platform for Indirapuram Public School, created by Aayann K Jain.

## Publish on GitHub Pages

1. Create a new **public** repository on GitHub (for example `ips-green-vision`).
2. Click **Add file → Upload files** and drag in **all** files from this folder,
   including the hidden `.nojekyll` file. (If the hidden file doesn't upload, it's fine
   to skip it.)
3. Go to **Settings → Pages**. Under *Build and deployment*, choose
   **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After 1–2 minutes the site is live at
   `https://<your-username>.github.io/<repository-name>/`

## One Supabase setting

Login, posts, likes, comments and image uploads use Supabase, which works from any website.
To make sure any email links point to the new address:

Supabase dashboard → **Authentication → URL Configuration**
- **Site URL:** `https://<your-username>.github.io/<repository-name>/`
- **Redirect URLs:** add the same address.

## Several photos in one post (one-time database update)

A student can attach up to 10 photos to one post; the description is shown once and
the photos appear as a small slideshow. This needs one new column in the `post` table:

1. Supabase dashboard → **SQL Editor** → **New query**.
2. Paste the whole of `supabase/multi-photo-posts.sql` and click **Run**.

Existing posts keep working unchanged. Until this is done, single-photo posts still
work and the page explains that several photos need the update.

## Plant a Tree: map-server pass-through (Supabase Edge Function)

The Plant a Tree page asks several OpenStreetMap servers at once. To reach the main
server (`overpass-api.de`) reliably, it uses a small pass-through on Supabase, which
replaces the old Netlify proxy. Set it up once:

1. Supabase dashboard → **Edge Functions** → **Deploy a new function** → **Via Editor**.
2. The function is named **`smooth-handler`** (the name Supabase gave it; the page uses this name).
3. Delete the sample code, paste the whole of `supabase/functions/overpass/index.ts`, click **Deploy**.
4. Open the function's settings (**Details**) and switch **off** JWT verification
   ("Verify JWT with legacy secret" / "Enforce JWT verification"), then **Save**.
   This is needed because the site's publishable key is not a JWT. The function only
   accepts requests from `https://aayannkjain.github.io`, so it is not an open proxy.
5. Check: open the Plant a Tree page, press F12 → Console, and search. No
   "Overpass server failed: …supabase.co/functions/v1/smooth-handler…" warning means it works.

If the function is not set up (or the Supabase project is paused), the page still works
using the other servers. The `supabase/` folder can be uploaded to GitHub with the
rest of the site; it is only kept there for reference.

If you move the site to another address, add it to `ALLOWED_ORIGINS` in the function.

## Notes

- File names are case-sensitive on GitHub Pages; do not rename the files.
- `eco_data.js` is about 21 MB, under GitHub's 25 MB browser-upload limit.
- The free Supabase plan pauses a project after about a week with no visitors. If login stops
  working, open the Supabase dashboard and click **Restore project**.
- Netlify's `netlify.toml` is not needed on GitHub. The Plant a Tree page talks to the
  public OpenStreetMap servers directly and through the Supabase `smooth-handler` function.
