for file in *.gif
  #convert $file -modulate 100,0 -ordered-dither 3x3 $file.gif
  echo "!["$file"]("$file")">>index.md
  echo "">> index.md
end
