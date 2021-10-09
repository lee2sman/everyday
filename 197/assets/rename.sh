cnt=1
for fname in *.webp
do
    mv $fname ${cnt}.webp #rename as numbers
    cnt=$(( $cnt + 1 ))
done
