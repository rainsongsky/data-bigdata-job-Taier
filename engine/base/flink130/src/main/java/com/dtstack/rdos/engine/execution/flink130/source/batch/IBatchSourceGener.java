package com.dtstack.rdos.engine.execution.flink130.source.batch;

import org.apache.flink.table.sources.BatchTableSource;

import java.util.Properties;

/**
 * 生成input 数据源
 * Date: 2017/2/20
 * Company: www.dtstack.com
 *
 * @ahthor xuchao
 */
public interface IBatchSourceGener<T extends BatchTableSource> {

    /**
     * 获取输入源
     * @param prop
     * @param fieldNames
     * @param fieldTypes
     * @return
     */
    T genBatchSource(Properties prop, String[] fieldNames, Class[] fieldTypes);
}
