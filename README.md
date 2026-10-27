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

## Notes

- File names are case-sensitive on GitHub Pages; do not rename the files.
- `eco_data.js` is about 21 MB, under GitHub's 25 MB browser-upload limit.
- The free Supabase plan pauses a project after about a week with no visitors. If login stops
  working, open the Supabase dashboard and click **Restore project**.
- Netlify's `netlify.toml` is not needed on GitHub. The Plant a Tree page now talks
  to the public OpenStreetMap servers directly.
