pnpm install likhne se

vo package.json mein jayega

aur vahan par jakar dependencies ko check karega

jisme use vite mil jayega

and then it will install vite inside a folder called as node_modules

pnpm install likha
toh ek new folder create hona chaiye (node_modules)
aur eske andar vite install ho chuka hoga

what's vite? it's a build tool that is used to combine/bundle files together

vite is also called as a bundler or a build tool

hme ess project mein vite ki kya jrurat hai?

---

in node_modules we get all our packages

node_modules wala folder
why is it grayed out?

aapko apna code github pe store karna hai?

github pe aap apna main code store karna chahte ho

node_modules jisko ham kabhi bhi generate kar skte hein

pnpm install

(entire code + node_modules) = 100mb

(entire code, package.json) = 10mb (pnpm install)

apke code ko chalne ke liye node modules

node_modules is kind of a junk folder that we can create anytime using a command

hme ye mark karna hai ki ye folder github pe nhi jana chaiye

now to ignore such files all we need to do is to write its name
inside a special file called as .gitignore

actual chiz hai = npm
pnpm ek doosri chiz hai jo npm pe he bani hai bus thodi si fast hai

appke project mein 10 dependencies (vite, apple, speaker)

npm ek ek karke install karta hai toh ye slow tha
pnpm ek saath sabko he download pe laga deta hai (fast)
yarn ye bhi same kaam karti hai
npm -> yarn -> (pnpm)

npm use kar rhe ho toh vohi use karo
pnpm use karliya toh fir usi ko use karo

---

jab hm vite se ek new project create karte hein tab hme
ek counter karke small project milta hai
ess chiz ko hm ek scaffold bolte hein
par why? agar aapne vite se ek new project start kiya
toh vite aapko jrurat ki saari chizen de deta hai
for example: gitignore, package.json, public/

saath mein vo ek basic app bana kar deta hai (agar ye app chal gya
toh smjho ki vite ka setup complete hogya)

---

public folder ek esa folder hai jisme ham static assets dalte hein
for example icons, images

aur eski speciality ye hai ki eske andar ki files ko link karne ke liye
hme /public nhi likhna hota

---

css ko javascript mein link kiya he nhi ja skta hai
lekin vite ki help se kar skte hein
because vite is a bundler
a bundler is a tool that combines multiple files into a single file
