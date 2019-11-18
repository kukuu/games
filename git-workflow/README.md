# git

Work Flow - Feature Branches with Merge commits

Option A - When  local repo exists before creating github repo

Create and checkout branch - git checkout -b feature-1
git status
git branch -a
git add .
git commit -m ''
git checkout feature-a
gitcheckout feature-b

merging (fast forward and recursive strategy):
git checkout master
git merge feature-a   
git merge feature-b  



1. Push to git - git push 'remote repo url' master

2. Create an alias to 'remote repo url' - git remote add 'repourl' origin

3. Push to alias - git push origin master



Option B - When you dont have a local repository. Alias is created by default.

Check alias with command 'git remote -v' 

Result  gives 'fetch' and 'push'

1. git clone 'remote repo url created'

2. git status

3. git add .

4. git commit -m "message"

5. git push origin masters



Delete branch:

to delete branch: git branch -D feature-3 (when branch is not merged)

to delete branch: git branch -d feature-3 (when branch is  merged)


Conflicts:

No need to add message on command commit, because is a merge commit.
1. Fix error

2. git status

3. git add .

4. git commit

5. in new editor do 'shift : wq enter key' to exit

6. git log --oneline (git log)


Collaboration:

1. git checkout master

2. git pull origin master

3. git checkout -b feature-d

4. git status

5. git add .

6. git commit -m "message"

7. git push origin feature-d

8. pick  => 'compare and pull request' f

9. Add extra useful messages

10. => click ' createpull request' button

11. Add assignee/reviewers to code  review and request to merge

12. check commits made and files changed

13. Add a comment. Say 'good work'

14. You can add messages to lines of code by clicking next to them (+)

15. Finally, you can merge

16. Confirm

17. Delete branch

.......................

Adding missed or new features

18. git chckout master

19. git pull origin master  (to get other collaborators)

20. git checkout -b image-update

22. Make changes

23. git status

25. git add .

26. git commit -m "added images"

27. git push origin image-update

28. Check remote repo

29. "Confirm and click branch  changes have been made" 

30. Go to 8 : Compare and pull request

In case it is not complete. Add a message : DONT MERGE:  say for example to add a misssing image and send back.
Work to be done in same branch

31. git add .

32. git commit -m "added last image"

33. git push origin image-update

34. Check remote repo and a timeline will be added to preious commit prior to adding the missing image

35. You should see message : THIS PAGE IS OUT OF DATE. REFRESH

36. (REVIEWER) Go back to conversations and MERGE.

37. Go to master branch and check updates.
