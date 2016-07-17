#!/bin/bash

# Expand dict/mecab-ipadic-2.7.0-20070801.tar.gz
# Convert char encoding from EUC-JP to UTF-8
# Re-compress UTF-8 encoded files to dict/mecab-ipadic-2.7.0-20070801.tar.xz

mkdir tmp
mkdir tmp/mecab-ipadic-2.7.0-20070801

pushd dict
tar xzvf mecab-ipadic-2.7.0-20070801.tar.gz
cp mecab-ipadic-2.7.0-20070801/* ../tmp/mecab-ipadic-2.7.0-20070801/

for i in $(ls -1 mecab-ipadic-2.7.0-20070801/*.{csv,def}); do
  filename=$(basename ${i})
  iconv -f EUCJP -t UTF8 ${i} > ../tmp/mecab-ipadic-2.7.0-20070801/${filename}
done

pushd ../tmp

COPYFILE_DISABLE=1 tar -Jcvf ../dict/mecab-ipadic-2.7.0-20070801.tar.xz mecab-ipadic-2.7.0-20070801

popd
popd
rm -rf tmp dict/mecab-ipadic-2.7.0-20070801
