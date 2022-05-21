import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import {serialize} from 'next-mdx-remote/serialize';

const root = process.cwd();

export const getFiles = () => {
    fs.readFileSync(path.join(root,'src/data/blogs'))
};

export const getFileBySlug = ({ slug }) => {}

export const getAllFilesMetadata = () => {};