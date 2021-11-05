cnt=0
for fname in *.jpg
do
    convert $fname -fuzz 20% -transparent white ${cnt}.png
    cnt=$(( $cnt + 1 ))
done
