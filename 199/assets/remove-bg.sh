cnt=1
for fname in *.png
do
    convert $fname -fuzz 20% -transparent white ${cnt}.png
    cnt=$(( $cnt + 1 ))
done
