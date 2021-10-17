cnt=0
for fname in *.png
do
    mv $fname ${cnt}.png #rename as numbers
    cnt=$(( $cnt + 1 ))
done
