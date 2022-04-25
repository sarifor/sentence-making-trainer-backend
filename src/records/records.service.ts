import { Injectable } from '@nestjs/common';
import { Record } from './entities/record.entity';

let records: Record[] = [
    {
        sentence: "test1",
        translated: "테스트1",
        source: "https://yahoo.co.jp",
        uploaded: new Date(),
    },
    {
        sentence: "test2",
        translated: "테스트2",
        source: "https://yahoo.co.uk",
        uploaded: new Date(),
    },    
];

interface Plans {
    showAllRecords(): any;
    uploadRecord(): any;
    uploadRecordPost(): any;
};

@Injectable()
export class RecordsService implements Plans {
    showAllRecords(): any {
        return { records: records };
    };

    uploadRecord(): any {
        console.log("uploadRecord");
        // return { records: records };
    }

    uploadRecordPost(): any {
        console.log("uploadRecordPost");
        // return undefined;
    };
};