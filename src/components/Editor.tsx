'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import MonacoEditor from '@monaco-editor/react';
import { defaultValue } from './defaultMd';
export default function Editor() {
  const [md, setMd] = useState(defaultValue);

  return (
    <div className='flex h-1/2 w-full flex-row border-2'>
      <div className='hidden h-full w-1/2 gap-5  sm:flex'>
        <MonacoEditor
          value={md}
          language='markdown'
          onChange={(e: any) => setMd(e)}
          height='100%'
          options={{
            minimap: {
              enabled: false,
            },
            lineNumbers: false,
            wordWrap: true,
          }}
        />
      </div>

      <div className='static flex h-full w-1/2 gap-5 sm:hidden'>
        <textarea
          name='editor'
          value={md}
          onChange={(e: any) => setMd(e.target.value)}
          cols={30}
          rows={10}
        />
      </div>

      <div className='prose flex w-full flex-1 flex-col  overflow-y-scroll'>
        <ReactMarkdown>{md}</ReactMarkdown>
      </div>
    </div>
  );
}
