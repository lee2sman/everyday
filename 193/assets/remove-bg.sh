cnt=1
for fname in *.webp
do
 #   mv $fname ${cnt}.webp #rename as numbers
    ffmpeg -i ${cnt}.webp ${cnt}.png
    convert ${cnt}.png -fuzz 20% -transparent white ${cnt}.png
    cnt=$(( $cnt + 1 ))
done
