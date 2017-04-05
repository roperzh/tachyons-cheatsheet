yaml2json docs/ --pretty --recursive | sed -e 's/}/},/g' -e '1s/^/[ /' -e '$ s//}\]/g' > app/assets/data.json
