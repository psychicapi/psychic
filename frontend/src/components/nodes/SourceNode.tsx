"use client";

import React, { useState, useCallback } from "react";
import { Handle, Position } from '@xyflow/react';
import * as SubframeCore from "@subframe/core";
import { DefaultPageLayout } from "@/subframe/layouts/DefaultPageLayout";
import { IconWithBackground } from "@/subframe/components/IconWithBackground";
import { RadioGroup } from "@/subframe/components/RadioGroup";
import { Button } from "@/subframe/components/Button";
import { Table } from "@/subframe/components/Table";
import { Select } from "@/subframe/components/Select";
import { PropertiesAccordion } from "@/subframe/components/PropertiesAccordion";
import { TextArea } from "@/subframe/components/TextArea";
import { Alert } from "@/subframe/components/Alert";
import { PropertiesRow } from "@/subframe/components/PropertiesRow";
import { Switch } from "@/subframe/components/Switch";

import { Node, NodeType } from "@/types";

export default function SourceNode() {
  const onChange = useCallback((evt: any) => {
    console.log(evt.target.value);
  }, []);
 
  return (
    <div className="flex w-112 flex-col items-start gap-6 rounded border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6">
      <Handle 
        type="source" 
        position={Position.Right} 
        className="!w-4 !h-4 !bg-brand-600"
      />
      <div className="flex w-full items-center justify-center gap-6">
        <span className="grow shrink-0 basis-0 text-heading-2 font-heading-2 text-default-font">
          Send Result to DB
        </span>
        <div className="flex items-center justify-end gap-2">
          <span className="text-body-bold font-body-bold text-default-font">
            Source
          </span>
          <IconWithBackground
            variant="brand"
            size="medium"
            icon="FeatherFileOutput"
            square={false}
          />
        </div>
      </div>
      <span className="text-body-bold font-body-bold text-default-font">
        Source: FiveTran
      </span>
      <div className="nodrag cursor-default select-text flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 rounded border border-solid border-neutral-border bg-default-background pt-6 pr-6 pb-6 pl-6 shadow-default">
        <span className="text-heading-3 font-heading-3 text-default-font">
          Schema
        </span>
        <div className="flex w-full flex-col items-start gap-4 rounded bg-neutral-50 pt-2 pr-2 pb-2 pl-2">
          <span className="w-full whitespace-pre-wrap text-monospace-body font-monospace-body text-default-font">
            {
              '{\n  "opportunity_id": "string",\n  "amount": "currency",\n  "close_date": "datetime",\n  "expected_revenue": "currency",\n  "fiscal": "string",\n  "is_closed": "boolean",\n  "is_win": "boolean"\n}'
            }
          </span>
        </div>
      </div>
      <div className="flex w-full items-center justify-end gap-2 pt-2 pr-2 pb-2 pl-2">
        <Button
          variant="brand-secondary"
          icon="FeatherArrowUpRight"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
        >
          Open
        </Button>
        <Button onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}>
          Run Node
        </Button>
      </div>
    </div>
  );
}