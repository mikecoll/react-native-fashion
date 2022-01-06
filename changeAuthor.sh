#!/bin/sh

git filter-branch --env-filter '

an="$GIT_AUTHOR_NAME"
am="$GIT_AUTHOR_EMAIL"
cn="$GIT_COMMITTER_NAME"
cm="$GIT_COMMITTER_EMAIL"

if [ "$GIT_COMMITTER_EMAIL" = "haoma@newbanker.cn" ]
then
    cn="mah93"
    cm="mahao9393@163.com"
fi
if [ "$GIT_AUTHOR_EMAIL" = "haoma@newbanker.cn" ]
then
    an="mah93"
    am="mahao9393@163.com"
fi

export GIT_AUTHOR_NAME="$an"
export GIT_AUTHOR_EMAIL="$am"
export GIT_COMMITTER_NAME="$cn"
export GIT_COMMITTER_EMAIL="$cm"
'
