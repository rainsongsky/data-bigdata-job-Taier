package com.dtstack.rdos.engine.db.dataobject;

import com.dtstack.rdos.engine.db.dataobject.base.ActionLog;

/**
 * Reason: TODO ADD REASON(可选)
 * Date: 2016年02月21日 下午1:16:37
 * Company: www.dtstack.com
 *
 * @author sishu.yss
 */
public class RdosBatchActionLog extends ActionLog {

    /**
     * 任务 id
     */
    private String jobId;

    public String getJobId() {
        return jobId;
    }

    public void setJobId(String jobId) {
        this.jobId = jobId;
    }
}
