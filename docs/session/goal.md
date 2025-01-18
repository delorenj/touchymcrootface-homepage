# Goal

The code is a standard vite boilderplate right now. Take the Vercel v0 components and integrate them into this boilerplate using the supplied command:

```sh
npx shadcn@latest add "https://v0.dev/chat/b/vbEXzpnYsNi?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..orHZcvFr_xIgbz6e.JGN4ZVZmGaq558Z9zL07IdqjrwWSjW-YNj-WIRD5IxMHIn2HHkUkgM3i.Tl8_zAcwjJ4mtZyo2xkQaw"
```

## Acceptance Criteria

1. I can open the local server and see the new v0 design

> Note
Apparently tailwind isn't configured correctly, so do that first.

```sh
touchymcrootface-homepage on  main [?] via  on ☁️  (us-east-1) on ☁️  jaradd@gmail.com(us-east5) 
❯ npx shadcn@latest add "https://v0.dev/chat/b/b_3o78tanyHau"
Need to install the following packages:
shadcn@2.1.8
Ok to proceed? (y) 

✔ You need to create a components.json file to add components. Proceed? … yes

No Tailwind CSS configuration found at /home/delorenj/code/touchymcrootface-homepage.
It is likely you do not have Tailwind CSS installed or have an invalid configuration.
Install Tailwind CSS then try again.
Visit https://tailwindcss.com/docs/guides/vite to get started.

No import alias found in your tsconfig.json file.
Visit https://ui.shadcn.com/docs/installation/vite to learn how to set an import alias.
```