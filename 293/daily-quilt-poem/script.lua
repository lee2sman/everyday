--lee2sman
--adapted from my previous generative quilt poems in Lua https://github.com/lee2sman/generative-quilt-poems
		local words={ "you", "we", "this", "that", "who", "what", "not", "all", "many", "one", "two", "big", "long", "small", "woman", "man", "person", "fish", "bird", "dog", "louse", "tree", "seed", "leaf", "root", "bark", "skin", "flesh", "blood", "bone", "grease", "egg", "horn", "tail", "feather", "hair", "head", "ear", "eye", "nose", "mouth", "tooth", "tongue", "claw", "foot", "knee", "hand", "belly", "neck", "breasts", "heart", "liver", "drink", "eat", "bite", "see", "hear", "know", "sleep", "die", "kill", "swim", "fly", "walk", "come", "lie", "sit", "stand", "give", "say", "sun", "moon", "star", "water", "rain", "stone", "sand", "earth", "cloud", "smoke", "fire", "ash", "burn", "path", "mountain", "red", "green", "yellow", "white", "black", "night", "hot", "cold", "full", "new", "good", "round", "dry", "name" }

local js = require "js"
local quilts = require "quilts"
local window = js.global
local document = window.document

local pieces={}
local pat

--seeded daily
local function init_random()
  math.randomseed(os.date("%Y%m%d"))
end

local function select_pattern()
  return math.random(#quilt)
end

local function create_pieces()
  for i=1,8 do
    --get pieces
    pieces[i]=words[math.floor(math.random(#words))]
  end

  max_column_width={0,0,0,0,0,0,0,0}
  for y=1,8 do
      for x=1,8 do
	local word=pieces[quilt[pat][y][x]]
	if #word>max_column_width[x] then
	  max_column_width[x]=#word
	end
      end
   end
end

function firstToUpper(str)
    return (str:gsub("^%l", string.upper))
end

local function split(phrase)
  chunks = {}
  for substring in phrase:gmatch("%S+") do
     table.insert(chunks, substring)
  end
  return chunks
end

local function capitalize_title(t)
  local capped=""
  for _,word in ipairs(t) do
    capped=capped..firstToUpper(word).." "
  end
  return capped
end

local function make_quilt()
  local title = pieces[1].." "..pieces[2].." "..quilt_types[pat].." quilt"
  local titleTable = split(title)
  local full_title=capitalize_title(titleTable)

h1=document:getElementById("title")
h1.innerText=full_title
  for y=1,8 do
    local line=""
    for x=1,8 do
      local word=pieces[quilt[pat][y][x]]
      local spaces=""
      local total_spaces=0

      for i=#word,max_column_width[x] do
	 total_spaces=total_spaces+1
      end
      local total_before=math.floor(total_spaces/2)
      local total_after=total_spaces-total_before
      local before_spaces=""
      for i=1,total_before do
	before_spaces=before_spaces.." "
      end
      local after_spaces=""
      for i=1,total_after do
	after_spaces=after_spaces.." "
      end
      line=line..before_spaces..word..after_spaces
    end
    poem=document:getElementById("poem")

    --preserves spaces with special html5 non-breaking space character
    --otherwise javascript collapses the spaces
    local newLine = string.gsub(line, " ", "&nbsp;")

    poem:insertAdjacentHTML('beforebegin',"<p>"..newLine.."</p>")
  end
end

-------------START---------------
init_random()
pat=select_pattern()
create_pieces()
make_quilt()
