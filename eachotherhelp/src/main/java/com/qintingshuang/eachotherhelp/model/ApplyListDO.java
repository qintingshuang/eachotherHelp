package com.qintingshuang.eachotherhelp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.io.Serializable;

import lombok.*;

import java.util.Date;

/**
 * @Description
 * @Author Hunter
 * @Date 2019-04-09
 */

@Data
@NoArgsConstructor
@Table(name = "apply_list")
public class ApplyListDO implements Serializable {

    private static final long serialVersionUID = 1332698762157671056L;

    @Column(name = "apply_id")
    private Long applyId;

    /**
     * 申请数量
     */
    @Column(name = "apply_amount")
    private Long applyAmount;

    /**
     * 申请时间
     */
    @Column(name = "apply_time")
    private Date applyTime;

    /**
     * 借钱上限
     */
    @Column(name = "borrow_limit")
    private Long borrowLimit;

    /**
     * 违约上限
     */
    @Column(name = "breach_amount")
    private Long breachAmount;

    /**
     * 创建时间
     */
    @Column(name = "create_time")
    private Date createTime;

    /**
     * 操作人
     */
    @Column(name = "operates")
    private String operates;

    /**
     * 订单号
     */
    @Column(name = "order_no")
    private Long orderNo;

    /**
     * 退还数量
     */
    @Column(name = "refund_amount")
    private Long refundAmount;

    /**
     * 备注
     */
    @Column(name = "remarks")
    private String remarks;

    /**
     * 偿还类型
     */
    @Column(name = "repay_type")
    private Long repayType;

    /**
     * 服务花费
     */
    @Column(name = "service_cost")
    private Double serviceCost;

    /**
     * 状态
     */
    @Column(name = "status")
    private Long status;

    /**
     * 状态说明
     */
    @Column(name = "status_str")
    private String statusStr;

    /**
     * 用户用处
     */
    @Column(name = "use_for")
    private String useFor;

    /**
     * 用户ID
     */
    @Column(name = "user_id")
    private Long userId;

    /**
     * 用户手机
     */
    @Transient
    private String userMobile;

    /**
     * 用户真实姓名
     */
    @Transient
    private String userRealName;

}
