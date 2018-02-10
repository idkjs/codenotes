# Deploy Local Git to Azure
 1. Run `git init`
 2. Run `git add .`
 3. Run `git commit -m "<commit message>"`
 4. Check git tree clear, `git status`.
 5. Go to portal.azure.com to the app service plan for the project.
 6. Go to deployment options, select local git repo.
 7. Go to overview and get the azure git link.
 8. Back in terminal define remote to portal git remote link where 'azure' is what we are naming the remote(could be anything) and define the url for that remote. run: 

 ```bash
 git remote add azure https://ensoadmin@gql-express.scm.azurewebsites.net:443/gql-express.git 
```

9. Push local master to remote. From project root directory run: `git push azure master`.

10. Goto portal app service overview, click the link to the app service. Project should open in browser and look the same as when your ran locally.

# Edit and re-deploy
1. Save edits.
2. Run `git add .` to stage changes
3. Run `git commit -a -m "updating home text"` to commit changes. '-a' flag mean commit all.
4. Push changes to azure `git push azure master`.
5. Refresh app service url in browser to see changes live.

# Adding Production and Test Deployment Slots on Azure

1. Go to app service you are using, select application settings.
2. Go to App Settings section, create NODE_ENV var set to production and save.
3. Made changes to app to set title to ENV version. Git commit and push
4. Refresh and site is display which version is deployed. This will allow us to
see the diff with test deployed version.
4. Go back to deployment slots and create test deplyment slot in portal.
5. Select production app as configuration source so it will clone its app settings.
6. Go to app settings for deployment slot, change NODE_ENV from production to test and 
slot setting box. This will make it so that when we swap test with production, this 
app setting will remain the test slot. We dont want this to change. When the swap occurs.
the previous production version will be swapped into the test slot and be labeled 
test.
7. Configure source control for test slot, go to deployment options select source.
8. Select local git repository again and hit OK.
9. Got overview for test slot, copy git url.
10. Remove existing azure remote `git remote rm azure`
11. Add the test git url, `git remote add azure https://ensoadmin@gql-express-test.scm.azurewebsites.net:443/gql-express.git`.
12. Add the new test git remote: `git pussh azure master`. The idea here is to mush
the master to the test slot, test it and swap it with production slot when you area ok
with it.
13. Go to the the url for the test deployment slot to see the app.

# Swap Test and Production Slots
1. Go to test slot,  click deployment slots.
2. Click swap at top of panel.
3. Only have to slots to defaults are swap source test,  destination production. Click ok.
4. Go to production site and see swap was done.
5. Can do same thing az cli. `az appservice web deployment slot swap --slot test --name gql-express --resource-group gql-express`.

# Set up Application Insights on app service

1. Go to app service, scroll down to application insight tab, click create.
2. Go to Applicantion Insights resource, then Properties under configure and get instrumentation key. "4fa598c4-d616-48b7-b195-41191dc9272b"
3. In project folder, `npm install applicationinsights --save`
4. made some changes to project to use app insight middleware. working.

# Add container to blob storage
1. Previously created blob storage service gqlcoursestorage with `az storage container create --name images --connection-string` + connection string  we get from gqlcoursestorage panel
2. 