/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import molecule from '@dtinsight/molecule';
import { taskTypeText } from '@/utils/enums';
import { isTaskTab } from '@/utils/is';
import { connect } from '@dtinsight/molecule/esm/react';

const Language = connect(molecule.editor, ({ current }: molecule.model.IEditor) => {
	if (!current) return null;

	const renderLanguage = () => {
		const dataType = current.tab?.data?.taskType;
		return isTaskTab(current.tab?.id) && taskTypeText(dataType);
	};

	// 渲染是否是增量
	const renderIncrement = () => {
		const isIncrement = isTaskTab(current.tab?.id) && current.tab?.data?.sourceMap?.syncModel;
		return isIncrement ? '(增量模式)' : null;
	};

	return (
		<span>
			{renderLanguage()}
			{renderIncrement()}
		</span>
	);
});

export default Language;
