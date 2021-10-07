cnt=1
for file in IMG_*.HEIC
do
    heif-convert file {cnt}.jpg
    cnt=$(( $cnt + 1 ))
done
