cnt=1
for filename in *.png
do
    convert $filename -fuzz 20% -transparent white ${cnt}.png
    cnt=$(( $cnt + 1 ))
done
