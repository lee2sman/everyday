cnt=1
for fname in *.webp
do
 #   mv $fname ${cnt}.webp #rename as numbers
    ffmpeg -i ${cnt}.webp ${cnt}.jpg
    cnt=$(( $cnt + 1 ))
done
